// Função de tradução da página
function translateToEnglish() {
  let elementsUp = document.getElementsByClassName('titleUp');
  let elementsUp1 = document.getElementsByClassName('titleUp1');
  let elementsUp2 = document.getElementsByClassName('titleUp2');
  let elementsUp3 = document.getElementsByClassName('titleUp3');
  let elements = document.getElementsByClassName('title1');
  let elements1 = document.getElementsByClassName('title2');
  let elements3 = document.getElementsByClassName('title3');
  let titleabout = document.getElementsByClassName('title-about');
  let about1 = document.getElementsByClassName('about1');
  let about2 = document.getElementsByClassName('about2');
  let about3 = document.getElementsByClassName('about3');
  let about4 = document.getElementsByClassName('about4');
  let about5 = document.getElementsByClassName('about5');
  let btnAbout = document.getElementsByClassName('btn-learn-more');
  let teamsection = document.getElementsByClassName('title-time');
  let teamsection1 = document.getElementsByClassName('section-time');
  let infoTeam1 = document.getElementsByClassName('info-team1')
  let infoTeam2 = document.getElementsByClassName('info-team2');
  let contact = document.getElementsByClassName('section-contact');
  let contact1 = document.getElementsByClassName('contact1');
  let local = document.getElementsByClassName('local');
  let phone = document.getElementsByClassName('fone');
  let yourName = document.getElementsByClassName('form-name');
  let yourEmail = document.getElementsByClassName('form-email');
  let subject = document.getElementsByClassName('form-ass');
  let msg = document.getElementsByClassName('form-msg');
  let btnEnvia = document.getElementsByClassName('btn-submit');
  let socilMideas = document.getElementsByClassName('title-social-mideas');
  



  for (let i = 0; i < elements.length; i++) {
    elementsUp[i].innerHTML = "Home"
    elementsUp1[i].innerHTML = "About"
    elementsUp2[i].innerHTML = "Team"
    elementsUp3[i].innerHTML = "Contact"
    elements[i].innerHTML = "Customized solutions for your business to evolve"
    elements1[i].innerHTML = `&#60;&#47;&#62; Transforming ideas`
    elements3[i].innerHTML = "Let's talk ?"
    titleabout[i].innerHTML = "About"
    about1[i].innerHTML = "The FJtecno team is dedicated for as long as necessary to understand every detail of your needs."
    about2[i].innerHTML = `<b>&#8627;</b> Turning ideas into reality with cutting-edge technology.`
    about3[i].innerHTML = `<b>&#8627;</b> Software development to propel your business to success.`
    about4[i].innerHTML = `<b>&#8627;</b> Innovating the world, one code at a time.`
    about5[i].innerHTML = "Turn your ideas into reality right now! We, at FJtecno, offer customized software development solutions for companies like yours. With years of experience and a highly skilled team, we can help you achieve your business goals and put your company on the path to success. Don't waste any more time - contact us today to find out how we can help!"
    btnAbout[i].innerHTML = "Know more"
    teamsection[i].innerHTML = "Team"
    teamsection1[i].innerHTML = "We are a highly qualified and experienced team, passionate about technology and dedicated to delivering high quality software solutions to our customers. Contact us to learn more about how we can help your company achieve its business goals through innovative and customized software solutions."
    infoTeam1[i].innerHTML = "More than 18 years of experience in software project management, team leadership. Bring better business results to companies using available IT tools."
    infoTeam2[i].innerHTML = "A senior Java developer and team leader who has worked on many complex projects with distributed and multicultural teams."
    contact[i].innerHTML = "Contact"
    contact1[i].innerHTML = "We are your next big choice!"
    local[i].innerHTML = "Location:"
    phone[i].innerHTML = "Phone:"
    yourName[i].innerHTML = "Your name"
    yourEmail[i].innerHTML = "Your email"
    subject[i].innerHTML = "Subject"
    msg[i].innerHTML = "Message"
    btnEnvia[i].innerHTML = "Send message"
    socilMideas[i].innerHTML = "Our Social Networks"
  }

}
