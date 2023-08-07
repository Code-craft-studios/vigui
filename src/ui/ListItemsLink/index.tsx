import styles from './styles.module.css';

type LinkProps = {
  text: string;
  url: string;
  icon?: string;
}

const defaultLinks = [
  {
    text: 'Item 1',
    url: 'https://google.com'
  },
  {
    text: 'Item 2',
    url: 'https://google.com'
  },
  {
    text: 'Item 3',
    url: 'https://google.com'
  }
]

type LinkProp = {
  customLinks?: Array<LinkProps>;
}


const ListItemsLink = ({ customLinks = defaultLinks}: LinkProp) => {
  return (
    <ul className={styles.ul}>
      {customLinks.map((link) => (
        link.icon ? (
          <li className={styles.li} key={link.text}><a href={link.url}><img src={link.icon} alt={link.text} /> {link.text}</a></li>
        ) : (
          <li className={styles.li} key={link.text}><a href={link.url}>{link.text}</a></li>
        )
      ))}
    </ul>
  )
}

export default ListItemsLink;