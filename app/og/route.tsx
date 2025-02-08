import { ImageResponse } from "next/og";

export function GET(request: Request) {
    let url = new URL(request.url);
    let title = url.searchParams.get("title") || "Arshad's Portfolio";
    let description = "Full Stack Developer";

    return new ImageResponse(
        (
            <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
                <div tw="flex flex-col w-full py-12 px-4 md:items-center justify-between p-8">
                    <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
                        {title}
                    </h2>
                    <p tw="text-sm text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {description}
                    </p>
                </div>
            </div>
        ),
        {
            width: 900,
            height: 600,
        }
    );
}
