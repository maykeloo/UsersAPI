import { User } from "../../../types/user"
import { Avatar, Box, TextLabel, TextLabelWrappers } from "./UserBox.styles"

interface Props extends React.PropsWithChildren {
      user: User
}

type Payload = ({ user }: Props) => JSX.Element

export const UserBox: Payload = ({ user }) => {
  return (
    <Box>
      <Avatar>MS</Avatar>
      <TextLabelWrappers>
        <TextLabel width="15">{user.name ? user.name : 'Imię nieznane'}</TextLabel>
        <TextLabel width="20">{user.surname ? user.surname : 'Nazwisko nieznane'}</TextLabel>
        <TextLabel width="20">{user.email ? user.email : 'E-mail nieznany'}</TextLabel>
        <TextLabel width="20">{user.birth_date ? user.birth_date : 'Data urodzin nieznana'}</TextLabel>
      </TextLabelWrappers>
    </Box>
  )
}
