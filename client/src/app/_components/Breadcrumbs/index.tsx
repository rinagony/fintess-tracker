import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colors from "@/shared/colors";

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
    color: ${(props) => (props.iscurrent ? colors.primary : "#000")};
    display: inline-block;
    text-decoration: none;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  svg {
    font-size: 0.8rem;
    margin: 0 0.5rem;
    color: ${colors.primary};
  }
`;

const Breadcrumbs = ({ pageName }: { pageName?: string  }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <BreadcrumbWrapper>
      {pathSegments.map((segment, index) => {
        // Check if the segment contains numbers
        const containsNumbers = /\d/.test(segment);

        return (
          <BreadcrumbItem
            key={index}
            iscurrent={pathSegments.length === index + 1}
          >
            {index !== 0 ? <ArrowForwardIosIcon /> : null}
            <Link
              href={`/${pathSegments
                .slice(0, index + 1)
                .map((seg) => (containsNumbers ? pageName : seg))
                .join("/")}`}
            >
              {/* Replace segments containing numbers with pageName */}
              {containsNumbers ? pageName : segment}
            </Link>
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumbs;