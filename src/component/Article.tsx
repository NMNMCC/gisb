import type { FC } from "react";
import Markdown from "react-markdown";
import { useAsync } from "react-use";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { res } from "../init";

export namespace Article {
    export type Show = {
        content: string;
    };

    export const Show: FC<Show> = ({ content }) => {
        return (
            <Markdown remarkPlugins={[rehypeRaw, remarkGfm]}>
                {content}
            </Markdown>
        );
    };

    export type Container = {
        id: string;
    };

    export const Container: FC<Container> = ({ id }) => {
        const raw_url = res?.data.files?.[id]?.raw_url!;

        const state = useAsync(() => fetch(raw_url).then((res) => res.text()));

        return (
            <article>
                {!id || !raw_url || state.loading ? (
                    <>Loading...</>
                ) : state.error ? (
                    <>{state.error.message}</>
                ) : (
                    <Show content={state.value}></Show>
                )}
            </article>
        );
    };
}
