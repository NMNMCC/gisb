import type { FC } from "react";
import { Preview } from "../component/Preview";
import { classify } from "../util/file";
import { files } from "../init";

export const Home: FC = () => {
    return (
        <div className="flex flex-col gap-4">
            {files
                ?.filter(({ filename }) => classify(filename!) === "markdown")
                .map(({ filename, content }) => (
                    <Preview.Show
                        key={filename}
                        id={filename!}
                        content={content!}
                    ></Preview.Show>
                ))}
        </div>
    );
};
