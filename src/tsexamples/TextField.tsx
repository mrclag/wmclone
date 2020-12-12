import React, {useState, useRef} from 'react'


interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text?: string;
  ok?: boolean; // this is optional
  i?: number;
  fn?: (str: string) => number;
  person?: Person; // function returns number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<Props> = ({handleChange}) => {
  const [count, setCount] = useState<number | null | undefined>(5);  //it is inferred but you can tell w these angle brackets
  setCount(5)

  const inputRef = useRef<HTMLInputElement>(null); // we tell it what type we are storing in this (input)

  return (
    <div>
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}

export default TextField