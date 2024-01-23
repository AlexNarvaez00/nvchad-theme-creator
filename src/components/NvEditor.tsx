interface Props {
  comments: string;
  functions: string;
  keywords: string;
  variables: string;
}

export default function NvEditor({
  comments,
  functions,
  keywords,
  variables,
}: Props) {
  return (
    <pre>
      <code style={{ color: comments }}>
        {`/**
 *
 *
 */
`}
      </code>
      <code style={{ color: keywords }}>export default function</code>
      <code style={{ color: functions }}> List</code>() <code>{`{\n`}</code>
      <code style={{ color: keywords }}>const </code>
      <code style={{ color: variables }}>{`name\n`}</code>
      <code>{`\n`}return {`(\n`}</code>
      <code>{`);`}</code>
      <code>{`}`}</code>
    </pre>
  );
}
