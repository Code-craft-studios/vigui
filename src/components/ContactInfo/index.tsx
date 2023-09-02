import { supbaseLocalClient } from "@/lib/modules";
import ListItemsLink from "@/ui/ListItemsLink";

const defaultLinks = [
  {
    text: '(+57) 3246338203',
    url: 'tel:+573246338203',
    icon: '/icons/contact/phone-icon.svg'
  },
  {
    text: 'viguitelecomunicaciones2017@gmail.com',
    url: 'mailto:viguitelecomunicaciones2017@gmail.com',
    icon: '/icons/contact/mail-icon.svg'
  }
]

async function ContactInfo() {
  const customLinks = await supbaseLocalClient.fetchContactInfo().catch(() => defaultLinks);
  return (
    <ListItemsLink
      customLinks={customLinks ?? []}
    />
  )
}

export default ContactInfo;
