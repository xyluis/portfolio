import { Avatar } from "../Avatar";

import { Box, Names, Name, Username } from './styles'

export function User(): JSX.Element {
  return (
    <Box>
      <Avatar src="https://github.com/xyluis.png" />

      <Names>
        <Name>Luís</Name>
        <Username>@xyluis</Username>
      </Names>
    </Box>
  )
}