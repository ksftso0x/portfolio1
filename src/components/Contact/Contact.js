import { AlternateEmail, Telegram } from "@material-ui/icons";
import { contact } from "../../portfolio";
import SkypeSVG from "../Access/skype.svg";
import DiscordSVG from "../Access/discord.svg";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact_links">
        <a className="btn btn--plain" href={`mailto:${contact.email}`}>
          <AlternateEmail fontSize="large" />
        </a>
        <a className="btn btn--plain" target="blank" href={contact.telegram}>
          <Telegram fontSize="large" />
        </a>
        {/* <a className="btn btn--plain" target="blank" href={contact.whatsapp}>
          <WhatsApp fontSize="large" />
        </a> */}
        <a className="btn btn--plain" target="blank" href={contact.skype}>
          <img height="35px" src={SkypeSVG} alt="Skype" />
        </a>
        <a className="btn btn--plain" target="blank" href={contact.discord}>
          <img height="35px" src={DiscordSVG} alt="Discord" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
