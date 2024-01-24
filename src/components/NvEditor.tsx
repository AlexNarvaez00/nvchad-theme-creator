interface Props {
  foregroundComments: string;
  foregroundFunctions: string;
  foregroundKeywords: string;
  foregroundVariables: string;
}

export default function NvEditor({
  foregroundComments,
  foregroundFunctions,
  foregroundKeywords,
  foregroundVariables,
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
      <code style={{ color: foregroundKeywords }}>const </code>
      <code style={{ color: foregroundVariables }}>{`name\n`}</code>
      <code>{`\n`}return {`(\n`}</code>
      <code>{`);`}</code>
      <code>{`}`}</code>
    </pre>
  );
}
