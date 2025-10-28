import { Title } from '@mantine/core'
import { PropsWithChildren } from 'react'

export function Section({
  id,
  title,
  children,
  ...rest
}: PropsWithChildren<
  { id: string; title: string } & React.HTMLAttributes<HTMLElement>
>) {
  return (
    <section id={id} {...rest}>
      <Title order={2} fz="xl" fw={600} mb="md" c={'primary.5'}>
        {title}
      </Title>
      {children}
    </section>
  )
}
