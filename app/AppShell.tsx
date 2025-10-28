'use client'
import {
  AppShell,
  Box,
  Burger,
  Button,
  Chip,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconArrowDown,
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPoint,
} from '@tabler/icons-react'
import { config } from './config'
import { Section } from './Section'

const breakpoint = 'sm'
const visibleFromClass = `mantine-visible-from-${breakpoint}`
const hiddenFromClass = `mantine-hidden-from-${breakpoint}`

export function CustomAppShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false)
  const scrollToSection = (id: string) => {}
  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: breakpoint,
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Container className="h-full">
          <Group h="100%">
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom={breakpoint}
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom={breakpoint}
              size="sm"
            />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        You can collapse the Navbar both on desktop and mobile. After sm
        breakpoint, the navbar is no longer offset by padding in the main
        element and it takes the full width of the screen when opened.
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>
          <Stack gap={'xl'}>
            <Stack
              gap="xl"
              justify="center"
              className="flex content-center relative"
              style={{
                height:
                  'calc(100vh - var(--app-shell-header-offset) - var(--app-shell-padding))',
              }}
            >
              <Box>
                <Title
                  className="text-slate-900"
                  fw={900}
                  order={1}
                  fz={{
                    base: 'xl',
                    [breakpoint]: 'xxl',
                  }}
                >
                  Hi, I'm Dzmitry Karaleu
                </Title>

                <Text
                  c="primary.5"
                  fz={{
                    base: 'xl',
                    [breakpoint]: 'xxl',
                  }}
                  fw={900}
                >
                  Full-Stack Software Developer
                </Text>
                <Group
                  mt="xs"
                  gap="xs"
                  className="text-slate-500 flex items-center text-muted-foreground"
                >
                  <Box visibleFrom={breakpoint}>
                    <IconMapPin size={16} />
                  </Box>
                  <Box hiddenFrom={breakpoint}>
                    <IconMapPin size={12} />
                  </Box>
                  <Text
                    fw={500}
                    fz={{
                      base: 'sm',
                      [breakpoint]: 'lg',
                    }}
                  >
                    Den Haag, The Netherlands
                  </Text>
                </Group>
              </Box>

              <Text
                fz={{
                  base: 'md',
                  [breakpoint]: 'lg',
                }}
                c="gray.9"
                fw={400}
                lh="lg"
              >
                Senior Software Engineer with 8 years of experience turning
                complex ideas into reliable, high-performance web applications.
                I lead development from strategy to delivery, collaborating
                across teams, delegating effectively, and driving strong
                engineering decisions. I focus on scalable architecture, smooth
                user experience, and helping teams deliver efficiently.
                Curiosity, clarity, and a strong sense of ownership guide how I
                build and how I lead.
              </Text>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  className={visibleFromClass}
                  variant="default"
                  size="sm"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects <IconArrowRight className="ml-2" size={16} />
                </Button>
                <Button
                  className={hiddenFromClass}
                  variant="default"
                  size="xs"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects <IconArrowRight className="ml-2" size={12} />
                </Button>
                <Button size="xs" className={hiddenFromClass} variant="outline">
                  <a
                    href={`mailto:${config.email}`}
                    className="flex items-center gap-2"
                  >
                    <IconMail size={12} /> Email Me
                  </a>
                </Button>
                <Button
                  className={visibleFromClass}
                  variant="outline"
                  size="sm"
                >
                  <a
                    href={`mailto:${config.email}`}
                    className="flex items-center gap-2"
                  >
                    <IconMail size={16} /> Email Me
                  </a>
                </Button>
              </div>

              <div className="flex gap-4 pt-4 ">
                <a
                  href={config.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-500 transition-colors"
                >
                  <IconBrandGithub size={20} />
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-500 transition-colors"
                >
                  <IconBrandLinkedin size={20} />
                </a>
              </div>

              <Box className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10  rounded-full flex items-center justify-center">
                <IconArrowDown size={20} className=" -mt-16 animate-bounce" />
              </Box>
            </Stack>

            <div className="w-full border border-slate-100"></div>

            <Section id="about" title="Professional Summary">
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Specializing in React, TypeScript, and Node.js ecosystems.
                  Strong focus on code quality, testing, and user experience.
                  Experienced in leading development teams and mentoring junior
                  developers.
                </p>
                <p>
                  I enjoy solving difficult engineering challenges, unblocking
                  teams, and turning ambiguity into clear, actionable plans.
                  With a strong sense of ownership and product mindset, I focus
                  on solutions that scale well, are easy to maintain, and
                  provide a great user experience. Curiosity and continuous
                  improvement guide how I build and how I lead.
                </p>

                <div className="pt-4">
                  <h3 className="font-semibold mb-2">Key Strengths:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>
                      Full-stack development with modern JavaScript frameworks
                    </li>
                    <li>Building scalable, maintainable architectures</li>
                    <li>Performance optimization and best practices</li>
                    <li>Agile development and team collaboration</li>
                  </ul>
                </div>
              </div>
            </Section>

            <div className="w-full border border-slate-100"></div>

            <Section id="projects" title=" Professional Experience">
              <Stack gap={'xl'} py="lg">
                {config.projects.map((project) => (
                  <div
                    key={project.title}
                    className="border-l-4 border-slate-300 pl-6 border bg-slate-50 p-4 rounded-xl"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <Title order={3}>{project.title}</Title>
                      <Text
                        fz={'sm'}
                        c={'gray.6'}
                        className="text-muted-foreground"
                      >
                        {project.period}
                      </Text>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.position} @{' '}
                      {project.companyLink ? (
                        <a href={project.companyLink} className="underline">
                          {project.company}
                        </a>
                      ) : (
                        project.company
                      )}
                    </p>
                    <p className="mb-3">{project.description}</p>

                    <Stack
                      component={'ul'}
                      my={'lg'}
                      className="list-disc list-inside space-y-1 mb-3 text-sm "
                    >
                      {project.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex text-muted-foreground gap-2"
                        >
                          <div className="flex items-center">
                            <IconPoint className="fill-slate-700 stroke-0" />
                          </div>
                          <div className="flex items-center">{achievement}</div>
                        </li>
                      ))}
                    </Stack>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          variant="light"
                          checked={true}
                          styles={{
                            iconWrapper: {
                              display: 'none',
                            },
                          }}
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </Stack>
            </Section>
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
