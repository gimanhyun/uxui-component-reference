'use client';

import { useState, useRef } from 'react';
import { Sparkles, Upload, Image as ImageIcon, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { OUTFIT_SAMPLES } from '@/data/fashion-data';
import { OutfitSample } from '@/types/fashion';
import { trackEvent } from '@/lib/mixpanel';

interface FashionUploadHeroProps {
  onSelectSampleOutfit: (sample: OutfitSample) => void;
  onCustomImageUpload: (file: File, dataUrl: string) => void;
  isScanning: boolean;
}

export function FashionUploadHero({
  onSelectSampleOutfit,
  onCustomImageUpload,
  isScanning
}: FashionUploadHeroProps) {
  const [selectedSampleId, setSelectedSampleId] = useState<string>(OUTFIT_SAMPLES[0].id);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      setSelectedSampleId(''); // 샘플 선택 해제

      trackEvent('Custom Fashion Image Uploaded', { fileName: file.name, fileSize: file.size });

      // FileReader를 사용하여 DataURL(Base64) 로 변환하여 모바일/PC 모두 100% 동작
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          onCustomImageUpload(file, dataUrl);
        }
      };
      reader.readAsDataURL(file);

      // 파일 인풋 초기화하여 재선택 가능하게 처리
      e.target.value = '';
    }
  };

  return (
    <section className="px-4 pt-6 pb-4">
      {/* 헤드라인 */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-900/60 text-[11px] font-bold text-amber-900 dark:text-amber-300 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>핀터레스트 & 릴스 캡처 전용 AI 검색</span>
        </div>

        <h1 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
          "이 옷 어디 꺼지?"<br />
          <span className="bg-gradient-to-r from-zinc-900 via-amber-600 to-zinc-500 dark:from-white dark:via-amber-400 dark:to-zinc-400 bg-clip-text text-transparent">
            캡처 사진 한 장으로 상·하의·신발 찾기
          </span>
        </h1>
        <p className="mt-2 text-xs text-zinc-500 leading-relaxed max-w-xs mx-auto">
          핀터레스트, 인스타 릴스 스크린샷을 올리면 AI가 아이템별 유사 쇼핑몰 구매 링크를 즉시 찾아드립니다.
        </p>
      </div>

      {/* 모바일 캡처 이미지 업로드 드롭존 */}
      <div className="relative border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-3xl p-5 text-center bg-zinc-50/70 dark:bg-zinc-950/50 hover:border-zinc-500 transition-all shadow-sm mb-6">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
        />
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center shadow-md">
            {isScanning ? (
              <RefreshCw className="w-5 h-5 animate-spin text-amber-400" />
            ) : (
              <Upload className="w-5 h-5" />
            )}
          </div>
          <div>
            <span className="font-extrabold text-xs text-zinc-900 dark:text-zinc-100 block">
              {uploadedFileName ? `선택된 캡처: ${uploadedFileName}` : '스마트폰 캡처 사진 터치하여 업로드'}
            </span>
            <span className="text-[10px] text-zinc-400">PNG, JPG 스크린샷 이미지 앨범 연결 지원</span>
          </div>
        </div>
      </div>

      {/* 1-Click 체험용 인기 착장 샘플 카러셀 */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
            <ImageIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>1-Click 인기 캡처 샘플 체험:</span>
          </span>
          <span className="text-[10px] text-zinc-400 font-medium">선택 시 AI 스캔 실행</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {OUTFIT_SAMPLES.map((sample) => {
            const isSelected = selectedSampleId === sample.id;
            return (
              <button
                key={sample.id}
                onClick={() => {
                  setSelectedSampleId(sample.id);
                  setUploadedFileName(null);
                  trackEvent('Sample Outfit Selected', { sampleId: sample.id, styleName: sample.styleName });
                  onSelectSampleOutfit(sample);
                }}
                className={`relative rounded-2xl overflow-hidden border text-left transition-all aspect-[4/5] flex flex-col justify-end p-2 group ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/40 shadow-md'
                    : 'border-zinc-200 dark:border-zinc-800 opacity-80 hover:opacity-100'
                }`}
              >
                <img
                  src={sample.imageUrl}
                  alt={sample.styleName}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 p-1 bg-amber-500 text-white rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                )}

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-extrabold line-clamp-1 block leading-tight">
                    {sample.styleName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
