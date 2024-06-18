import "./ControlButtons.css";
import { useSelector } from "react-redux";
import ControlButton from "./ControlButton";
import {
  useUpdateModelIsActiveMutation,
  useUpdatePayIsActiveMutation,
  useUpdateTestPeriodIsActiveMutation,
} from "../../features/pay-config/payConfigApiSlice";
import {
  selectModelIsActive,
  selectPayIsActive,
  selectTestPeriodIsActive,
} from "../../features/pay-config/payConfigSlice";

function ControlButtons() {
  const payIsActive = useSelector(selectPayIsActive);
  const modelIsActive = useSelector(selectModelIsActive);
  const testPeriodIsActive = useSelector(selectTestPeriodIsActive);

  const [updatePayIsActive] = useUpdatePayIsActiveMutation();
  const [updateModelIsActive] = useUpdateModelIsActiveMutation();
  const [updateTestPeriodIsActive] = useUpdateTestPeriodIsActiveMutation();

  const buttonsData = [
    {
      title: "Система оплаты",
      description: "Нажмите чтобы включить/выключить систему оплаты",
      initialState: payIsActive,
      onClick: () => updatePayIsActive({}),
    },
    {
      title: "Модель",
      description: "Нажмите чтобы включить/выключить модель",
      initialState: modelIsActive,
      onClick: () => updateModelIsActive({}),
    },
    {
      title: "Тестовый период",
      description: "Нажмите чтобы включить/выключить тестовый период",
      initialState: testPeriodIsActive,
      onClick: () => updateTestPeriodIsActive({}),
    },
  ];

  return (
    <div className="control-buttons">
      {buttonsData.map((button, index) => (
        <ControlButton
          key={index}
          title={button.title}
          description={button.description}
          initialState={button.initialState}
          className={
            index !== buttonsData.length - 1
              ? "control-button-container-border"
              : ""
          }
          handleToggle={button.onClick}
        />
      ))}
    </div>
  );
}

export default ControlButtons;
