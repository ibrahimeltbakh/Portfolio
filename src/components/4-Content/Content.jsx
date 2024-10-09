import "./content.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../../public/animations/done.json";
import contactUs from "../../../public/animations/contact us.json";

export default function Content() {
  const [state, handleSubmit] = useForm("xrbgzynr");
  return (
    <div className="contact-us inside-container">
      <section className="upper-section">
        <h1>
          <i className="fa-solid fa-envelope message"></i> Contact Us
        </h1>
        <p>
          contact us for more information and Get notified when I publish
          something new, and unsubscribe at any time.
        </p>
      </section>
      <div className="data flex">
        <section className="left-section">
          <form onSubmit={handleSubmit}>
            <div className="flex email">
              <label htmlFor="email">Email Address:</label>
              <input
                required
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex message">
              <label htmlFor="message">write Message:</label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="flex submit">
              <input
                type="submit"
                disabled={state.submitting}
                value={state.submitting ? "Submitting..." : "Submit"}
              />
            </div>
            {state.succeeded && (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "18px",
                  marginTop: "1.7rem",
                  color: "var(--sub-title)",
                }}>
                <Lottie
                  style={{
                    height: "35px",
                    marginRight: "5px",
                  }}
                  loop={false}
                  animationData={done}
                />
                Thank You, Your Message has been sent successfuly 👌
              </p>
            )}
          </form>
        </section>
        <section className="right-section">
          <Lottie className="Lottie" animationData={contactUs} />
        </section>
      </div>
    </div>
  );
}
