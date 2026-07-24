import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "すべての項目を入力してください。",
        },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "お問い合わせ <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `【ホームページ】${name}様からお問い合わせ`,
      html: `
        <div style="font-family: sans-serif; line-height:1.8;">
          <h2>ホームページからお問い合わせが届きました📩</h2>

          <hr />

          <p><strong>お名前</strong></p>
          <p>${name}</p>

          <p><strong>メールアドレス</strong></p>
          <p>${email}</p>

          <p><strong>お問い合わせ内容</strong></p>

          <div style="white-space:pre-wrap;">
            ${message}
          </div>

          <hr />
          <p style="color:#888;font-size:13px;">
            このメールは chie のホームページのお問い合わせフォームから送信されました。
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "送信が完了しました。",
    });

  } catch (error) {
    console.error("Contact API Error:", error);


    return NextResponse.json(
      {
        success: false,
        message: "メールの送信に失敗しました。",
      },
      {
        status: 500,
      }
    );
  }
}