import { NextRequest, NextResponse } from 'next/server';
import { analyzeFashionImage } from '@/lib/fashion-ai-service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { description, imageFileName, sampleId, customImageUrl } = body;

    const result = await analyzeFashionImage(description, imageFileName, sampleId, customImageUrl);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '패션 착장 AI 스캔 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
