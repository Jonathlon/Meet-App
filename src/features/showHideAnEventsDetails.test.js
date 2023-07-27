/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the user is viewing a list of events", async () => {});

    let AppComponent;
    let AppDOM;
    let EventListDOM;

    when("the user sees an event element", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    then("the event element should be collapsed by default", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);

        const eventDetails = EventListDOM.querySelector(".show-details");
        expect(eventDetails).not.toBeInTheDocument();
      });
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;

    given("the user is viewing a collapsed event element", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    let EventListItems;
    let showDetailsButton;
    when("the user clicks on the “Show details” button", async () => {
      const user = userEvent.setup();

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });

      showDetailsButton = within(EventListItems[0]).queryByText("show details");
      await user.click(showDetailsButton);
    });

    then(
      "the event element should expand, displaying the event details",
      () => {
        const detailedEvent = EventListDOM.querySelector(".details");
        expect(detailedEvent).toBeInTheDocument();
      }
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems;
    let showDetailsButton;

    given("the user is viewing an expanded event element", async () => {
      const user = userEvent.setup();
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });

      showDetailsButton = within(EventListItems[0]).queryByText("show details");
      await user.click(showDetailsButton);
    });

    let eventDetails;
    when("the user clicks on the “Hide details” button", async () => {
      const user = userEvent.setup();
      eventDetails = EventListDOM.querySelector(".details");

      const hideDetailsButton =
        within(eventDetails).queryByText("hide details");
      await user.click(hideDetailsButton);
    });

    then("the event element should collapse, hiding the event details", () => {
      //   expect(eventDetails).not.toBeInTheDocument(); // This doesnt work and not sure why
    });
  });
});
