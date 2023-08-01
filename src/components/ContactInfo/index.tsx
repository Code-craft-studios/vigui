import ListItemsLink from "@/ui/ListItemsLink";

const ContactInfo = () => {
  return (
    <>
      <ListItemsLink
        customLinks={[
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
        ]}
      />
    </>
  )
}

export default ContactInfo;
