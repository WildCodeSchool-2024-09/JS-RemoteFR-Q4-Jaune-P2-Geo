export default function Contact() {
  return (
    <>
      <h1>Contact</h1>

      <form action="mailto:45.killian.georges@gmail.com" method="post">
        <div className="containerForm">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="lastname"
            name="user_lastname"
            placeholder="Entrez votre nom"
            required
          />

          <label htmlFor="prénom">Prénom :</label>
          <input
            type="text"
            id="firstname"
            name="user_firstname"
            placeholder="Entrez votre prénom"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="mail"
            name="user_mail"
            placeholder="Entrez votre email"
            required
          />

          <label htmlFor="message">Message :</label>
          <input
            type="text"
            id="message"
            name="user_message"
            placeholder="Entrez votre message"
            required
          />
          <button type="button">Envoyer</button>
        </div>
      </form>
    </>
  );
}
