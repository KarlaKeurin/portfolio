import '../styles/components/contact.scss';

export function Contact() {
  return (
    <div className="social-list">
      <a href="https://www.instagram.com/karlakeurin/" target="_blank" rel="noreferrer" className='social-media'>
        <p>INSTAGRAM</p>
      </a>
      <a href="https://github.com/KarlaKeurin" target="_blank" rel="noreferrer" className='social-media'>
        <p>GITHUB</p>
      </a>
      <a href="https://www.linkedin.com/in/karlakeurin/" target="_blank" rel="noreferrer" className='social-media'>
        <p>LINKEDIN</p>
      </a>
      <a href="mailto:devkarlakeurin@gmail.com" target="_blank" rel="noreferrer" className='social-media'>
        <p>GMAIL</p>
      </a>
    </div>
  )
}
