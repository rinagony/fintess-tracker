import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface BreadcrumbItemProps {
  iscurrent?: boolean;
}

const BreadcrumbWrapper = styled.div`
  margin-bottom: 1rem;
`;

const BreadcrumbItem = styled.div<BreadcrumbItemProps>`
  display: inline-block;
  a {
    font-size: 1rem;
    color: ${(props) => (props.iscurrent ? "#2D9596" : "#000")};
    display: inline-block;
    text-decoration: none;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  svg {
    font-size: 0.8rem;
    margin: 0 0.5rem;
    color: #2d9596;
  }
`;

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <BreadcrumbWrapper>
      {pathSegments.map((segment, index) => (
        <BreadcrumbItem
          key={index}
          iscurrent={pathSegments.length === index + 1}
        >
          {index !== 0 ? <ArrowForwardIosIcon /> : null}
          <Link href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
            {segment}
          </Link>
        </BreadcrumbItem>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumbs;
