import { useState, FormEvent } from "react";
import styles from "@/styles/Contact.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xqapkdnv", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setFormStatus("Thank you for your message! We'll get back to you soon.");
      form.reset();
    } else {
      setFormStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>Contact the Band</h2>
        <form onSubmit={handleSubmit} method="POST" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              className={styles.textareaField}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>

          {formStatus && <p className={styles.formStatus}>{formStatus}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}
