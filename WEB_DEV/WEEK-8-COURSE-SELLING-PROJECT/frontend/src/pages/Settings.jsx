import { useState } from "react";
import WrapperContainer from "../components/WrapperContainer";
import TextInput from "../components/TextInput";
import { getContextData } from "../context/AuthContexProvider";

const Settings = () => {
  const [active, setActive] = useState(0);
  const { user } = getContextData();
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <WrapperContainer containerClass={``}>
      <div className="flex gap-5 flex-row border-b py-4 border-b-gray w-full justify-center sm:justify-start  ">
        {links.map((item, index) => (
          <span
            key={index}
            className={`font-clash-regular cursor-pointer hover:bg-yellow px-4 py-2 rounded-full duration-300 drop-shadow-sm active:scale-100 hover:scale-105  ${
              active === index ? "bg-yellow shadow-sm" : "bg-none"
            }`}
            onClick={() => setActive(index)}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {active === 0 ? (
          <>
            <TextInput lable={"full name"} value={fullName} isReadOnly={true} />
            <TextInput
              lable={"email address"}
              value={user.email}
              isReadOnly={true}
            />
          </>
        ) : (
          <TextInput
            lable={"current password"}
            placeholder={"Enter current password and change it"}
            isReadOnly={true}
          />
        )}
      </div>
    </WrapperContainer>
  );
};

export default Settings;

const links = ["General", "Security"];
