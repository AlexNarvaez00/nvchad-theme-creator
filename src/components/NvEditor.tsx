import { Submenu } from "./Submenu";
import { Line } from "./Line";
import { useBase16 } from "@/hooks/useBase16";
import { useBase30 } from "@/hooks/useBase30";

interface Props {}

export default function NvEditor({}: Props) {
  const { grey, grey_fg, purple, one_bg2, white } = useBase30();
  const {
    base02,
    base05,
    base08,
    base09,
    base0A,
    base0B,
    base0C,
    base0D,
    base0E,
    base0F,
  } = useBase16();
  let line = 0;

  const keyword = { color: base0E };
  const comment = { color: grey_fg };
  const variables = { color: base08 };
  const operators = { color: base05 };

  return (
    <pre className={`pb-16 pl-4`}>
      <ul>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* comments  */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* hola soy un comentario */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          {``}
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* keywords */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code
            style={keyword}
          >{`var let const default import for while do export from class interface`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code
            style={comment}
          >{`/* Classes, Interfaces, Markup Bold, Search Text Background */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>class</code>{" "}
          <code style={{ color: base0A }}>{`Person`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>interface</code>{" "}
          <code style={{ color: base0A }}>{`Props`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Functions and Methods */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`function`}</code>{" "}
          <code style={{ color: base0D }}>{`Post`}</code>
          <code style={{ color: base0F }}>{`(){}`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Active block */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={{ background: one_bg2 }}>
            <code style={keyword}>{`function `}</code>
            <code style={{ color: base0D }}>{`Post`}</code>
            <code style={{ color: base0F }}>{`(){`}</code>
          </code>
        </Line>
        <Line number={line++} color={white}>
          <code style={{ color: base0F }}>{`}`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* regular expresions */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`const`}</code> regex = /
          <code style={{ color: base0C }}>{`^[a-z]`}</code>/$;
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* strings */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`const`}</code> name ={" "}
          <code style={{ color: base0B }}>{`"Alexis"`}</code>;
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Integers, Boolean, Constants */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`const`}</code> age ={" "}
          <code style={{ color: base09 }}>10</code>;
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`const`}</code> active ={" "}
          <code style={{ color: base09 }}>true</code>;
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Variables */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={keyword}>{`let `}</code>
          <code style={variables}>name</code> ={" "}
          <code style={{ color: base0B }}>"alex"</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Operators */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={operators}>{`< > != === >= <= ! && + * % ||`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Text selected */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={{ background: base02 }}>{`texto selected`}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{``}</code>
        </Line>
        <Line number={line++} color={grey}>
          <code style={comment}>{`/* Error */`}</code>
        </Line>
        <Line number={line++} color={grey}>
          scsdcsc <code style={{ color: purple }}>{`Error syntax`}</code>
        </Line>
        <Submenu />
      </ul>
    </pre>
  );
}
