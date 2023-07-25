/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> component", () => {
  test("checks if element has the role of a text box", () => {
    const NOEcomponent = render(<NumberOfEvents eventNumber={32} />);
    const numberTextBox = NOEcomponent.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textbox");
  });

  test("by default, number of events is listed as 32", async () => {
    const NOEcomponent = render(<NumberOfEvents eventNumber={32} />);
    const numberTextBox = NOEcomponent.queryByPlaceholderText("Enter a number");
    expect(numberTextBox).toHaveValue("32");
  });

  test("user can change number of events they wish to see listed", async () => {
    const user = userEvent.setup();

    const handleEventNumberChange = jest.fn();
    const NOEcomponent = render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
      />
    );
    const numberTextBox = NOEcomponent.queryByPlaceholderText("Enter a number");
    await user.type(numberTextBox, "10");
    expect(handleEventNumberChange).toHaveBeenCalled();
  });
});

describe("<NumberOfEvents /> integration", () => {
  test("number of events state equals number of events specified", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const NumberOfEventsInput =
      within(NumberOfEventsDOM).queryByRole("textbox");
    await user.type(NumberOfEventsInput, "{backspace}{backspace}10");
  });
});
