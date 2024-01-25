import { NvEditorTypes } from "@/types/nvEditorTypes";

interface Props extends NvEditorTypes {}

export default function NvEditor({
  foregroundComments,
  foregroundFunctions,
  foregroundKeywords,
  foregroundOperators,
  foregroundVariables,
  foregroundString
}: Props) {
  return (
    <pre className={`pb-16 pl-4`}>
      <code style={{ color: foregroundComments }}>
        {`/**
 *
 *
 */
`}
      </code>
      <code style={{ color: foregroundKeywords }}>export default function</code>
      <code style={{ color: foregroundFunctions }}> List</code>() <code>{`{\n`}</code>
      <code style={{ color: foregroundKeywords }}>const </code> <span style={{ color: foregroundVariables}}>name</span> <code style={{ color: foregroundOperators}}>=</code> <code style={{ color: foregroundString
}}>"Alexis"</code>;{`\n`}
      <code>{`\n`}return {`(\n`}</code>
      <code>{`);`}</code>
      <code>{`}`}</code>
    </pre>
  );
}
