import { TToolsKnowledgeProps } from "../types";

export const ToolsKnowledge = ({ icon, lang, text }: TToolsKnowledgeProps) => {
    return (
        <div className="flex gap-4">
            {icon}
            <div>
                <h2 className="font-medium text-gray-800 dark:text-white">{lang}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-sm">{text}</p>
            </div>
        </div>
    );
};