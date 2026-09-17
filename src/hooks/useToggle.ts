import { useState } from "react";

const useToggle = (initState: boolean) => {
  const [isToggle, setToggle] = useState<boolean>(initState);

  const handleToggle = (): void => setToggle((prev) => !prev);

  return { isToggle, handleToggle };
};

export default useToggle;
