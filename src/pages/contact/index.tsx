import styles from "@/styles/Contact.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ContactForm() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>Contact Us</h2>
        <form
          action="https://formspree.io/f/xqapkdnv"
          method="POST"
          className={styles.form}
        >
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
              placeholder="Make some noise 🤘"
              className={styles.textareaField}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
