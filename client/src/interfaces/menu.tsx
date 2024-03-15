interface SubpageProps {
  title: string;
  link: string;
}

interface PageProps {
  title: string;
  link?: string;
  icon: React.ReactNode;
  subpages?: SubpageProps[];
}

export type { PageProps, SubpageProps }