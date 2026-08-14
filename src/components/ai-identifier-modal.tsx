'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X, Upload, CheckCircle2, ArrowRight, RefreshCw, FileText, Layers } from 'lucide-react';
import { AIIdentifyResult, UIComponentData } from '@/types/component';
import { trackEvent } from '@/lib/mixpanel';

interface AIIdentifierModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialText?: string;
  onSelectComponent: (comp: UIComponentData) => void;
}

export function AIIdentifierModal({
  isOpen,
  onClose,
  initialText = '',
  onSelectComponent
}: AIIdentifierModalProps) {
  const [description, setDescription] = useState(initialText);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIIdentifyResult | null>(null);

  useEffect(() => {
    if (initialText) {
      setDescription(initialText);
      handleAnalyze(initialText, null);
    }
  }, [initialText]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setFilePreview(url);
    }
  };

  const handleAnalyze = async (descText?: string, file?: File | null) => {
    setLoading(true);
    setResult(null);

    const textToSubmit = descText !== undefined ? descText : description;
    const fileToSubmit = file !== undefined ? file : selectedFile;

    try {
      const res = await fetch('/api/ai-identify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description: textToSubmit,
          imageFileName: fileToSubmit ? fileToSubmit.name : undefined
        })
      });

      const json = await res.json();
      if (json.success) {
        setResult(json.data);
        trackEvent('AI Identification Completed', {
          confidence: json.data.confidence,
          identifiedComponent: json.data.identifiedComponent.name,
          hasImage: !!fileToSubmit
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* 상단 헤더 */}
        <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl">
              <Sparkles className="w-4 h-4 text-amber-300 dark:text-amber-600" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                LLM 5 Lenses UI 컴포넌트 명칭 식별기
              </h3>
              <p className="text-[11px] text-zinc-500">이미지 또는 화면 동작 묘사를 분석하여 표준 UI 명칭을 도출합니다.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 바디 콘텐츠 (스크롤) */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* 이미지 업로드 영역 */}
          <div>
            <label className="block font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
              1. UI 캡처 이미지 업로드 (선택사항)
            </label>
            <div className="relative border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 text-center hover:border-zinc-400 transition bg-zinc-50/40 dark:bg-zinc-950/30">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              {filePreview ? (
                <div className="flex items-center justify-between px-3 py-2 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <span className="truncate max-w-[200px] text-zinc-700 dark:text-zinc-300 font-medium">
                    {selectedFile?.name}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFile(null);
                      setFilePreview(null);
                    }}
                    className="text-red-500 hover:underline text-[10px]"
                  >
                    제거
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center py-2 text-zinc-500">
                  <Upload className="w-6 h-6 mb-1 text-zinc-400" />
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">이미지 파일 클릭 또는 드래그 앤 드롭</span>
                  <span className="text-[10px] text-zinc-400">PNG, JPG, WebP 캡처 파일 지원</span>
                </div>
              )}
            </div>
          </div>

          {/* 자연어 설명 입력 */}
          <div>
            <label className="block font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5">
              2. 화면 구성 및 동작 방식 묘사
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="예: 클릭하면 목록이 아래로 펼쳐지는 토글 영역, 화면 상단에 띄우는 복사 완료 메시지 등..."
              className="w-full p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 transition"
            />
          </div>

          {/* 실행 버튼 */}
          <button
            onClick={() => handleAnalyze()}
            disabled={loading || (!description.trim() && !selectedFile)}
            className="w-full py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition shadow-md"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
                <span>LLM 분석 추론 중...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300 dark:text-amber-600" />
                <span>AI 명칭 식별 실행</span>
              </>
            )}
          </button>

          {/* 분석 결과 카드 */}
          {result && (
            <div className="mt-4 p-5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 rounded-full font-bold text-[10px]">
                  식별 신뢰도 {result.confidence}%
                </span>
                <span className="text-[10px] text-zinc-400">LLM 5 Lenses Analysis</span>
              </div>

              {/* 식별된 컴포넌트 메인 */}
              <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-zinc-900 dark:text-zinc-100">
                    {result.identifiedComponent.name}
                  </h4>
                  <p className="text-xs text-zinc-500 font-medium">
                    {result.identifiedComponent.koreanName}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onSelectComponent(result.identifiedComponent);
                    onClose();
                  }}
                  className="px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-xs font-semibold flex items-center gap-1 hover:opacity-90 transition"
                >
                  <span>레퍼런스 이동</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 매칭 근거 */}
              <div className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400 bg-white/60 dark:bg-zinc-900/60 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800/80">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 block mb-0.5">💡 분석 결과 요약:</span>
                {result.matchedReason}
              </div>

              {/* 대안 추천 */}
              <div>
                <span className="font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">유사 컴포넌트 대안:</span>
                <div className="space-y-1">
                  {result.alternativeSuggestions.map((alt, i) => (
                    <div key={i} className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-[11px]">
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">{alt.name}</span>
                      <span className="text-zinc-400 text-[10px] truncate max-w-[200px]">{alt.reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
