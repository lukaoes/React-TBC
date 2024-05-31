const ContactMap = () => {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23814.3905743853!2d44.7840256!3d41.746432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473ef13cbd3bb%3A0x9ae8f4f9dcd9bb15!2sKikvidze%20Park!5e0!3m2!1sen!2sge!4v1717170678750!5m2!1sen!2sge"
        width="100%"
        height="300"
        style={{
          border: 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
