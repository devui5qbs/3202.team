import { SetStateAction, useState } from "react";
import MainContainer from "./components/containers/MainContainer";
import MainCard from "./components/ui/cards/MainCard";
import MainForm from "./components/ui/forms/MainForm";
import { API } from "./constants/API";
import { createLink } from "./controlers/CreateLink";
import { IGetRequestResponse } from "./interfaces/GetRequest.interface";
import { MainInputProps } from "./interfaces/MainInput.props";
import { UserService } from "./services/user.service";
import { ANIMATION } from "./constants/ANIMATION";

function App() {
  const defaultUser = {
    email: "",
    number: "",
  };
  const [user, setUser] = useState<IGetRequestResponse>(defaultUser);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const allInputs: MainInputProps[] = [
    {
      name: "email",
      placeholder: "email@address.com",
      type: "email",
      text: "Email",
      inputName: "email",
      required: true,
    },
    {
      name: "number",
      placeholder: "00-00-00",
      type: "text",
      text: "Number",
      inputName: "number",
      required: false,
    },
  ];
  const getUser = async (email: string, number: string): Promise<void> => {
    const { URL, USER } = API;
    const url = `${createLink(URL, USER)}?email=${email}&number=${number}`;

    setLoading(true);
    setError("");
    setUser(defaultUser);

    try {
      const response = await UserService.get<IGetRequestResponse>({
        method: "get",
        url,
      });

      if ("canceled" in response) {
        console.log("The request was canceled");
        setUser(defaultUser);
        setLoading(false);
        return;
      }

      setLoading(false);
      setUser(response as SetStateAction<IGetRequestResponse>);
    } catch (error: any) {
      console.error("An error occurred:", error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <MainCard active={loading} rules={ANIMATION.rulesForLoading}>
        <p className="text-[16px] font-medium text-main-textMain">Loading...</p>
      </MainCard>
      <MainCard active rules={ANIMATION.defaultRules}>
        <MainForm inputs={allInputs} getUser={getUser} submit />
      </MainCard>
      <MainCard
        active={!!user.email || !!error}
        rules={ANIMATION.rulesForLoading}
      >
        {!!user.email && (
          <>
            <p className="text-[16px] font-medium text-main-textMain">
              {user?.email}
            </p>
            <p className="text-[16px] font-medium text-main-textMain">
              {user?.number}
            </p>
          </>
        )}
        {!!error && (
          <p className="text-[16px] font-medium text-red-500">{error}</p>
        )}
      </MainCard>
    </MainContainer>
  );
}

export default App;
