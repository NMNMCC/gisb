import type { FC } from "react";
import Markdown from "react-markdown";
import { Link } from "wouter";
import remarkGfm from "remark-gfm";

export namespace Preview {
    export type Show = {
        id: string;
        content: string;
    };
    export const Show: FC<Show> = ({ id, content }) => {
        return (
            <div className="cursor-pointer **:!m-0 hover:opacity-80">
                <Link href={id} asChild>
                    <div className="line-clamp-3">
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </Markdown>
                    </div>
                </Link>
            </div>
        );
    };
}
