import { PageWrapper } from "@/types"

const PageWrapper = ({ classes, children }: PageWrapper) => {
  return <div className={classes || ""}>{children}</div>
}

export default PageWrapper
