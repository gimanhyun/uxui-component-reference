import { NextRequest, NextResponse } from 'next/server';
import { identifyUIComponent } from '@/lib/ai-service';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { description, imageFileName } = body;

    const result = await identifyUIComponent(description, imageFileName);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'AI 컴포넌트 식별 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
