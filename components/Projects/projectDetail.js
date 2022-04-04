import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projectStyles from "../../styles/ProjectCard.module.css";

const ProjectDetail = (props) => {
  const { title, slug, thumbnailUrl, bannerUrl, repoUrl, siteUrl } =
    props.project.fields;

  return (
    <motion.div className={projectStyles.card}>
      <h1>{title}</h1>
      <Image
        src={"https:" + thumbnailUrl.fields.file.url}
        width='200px'
        height='200px'
      />
      <Link href={"../../projects/" + slug}>
        <div className={projectStyles.cardLink}>Read More</div>
      </Link>
    </motion.div>
  );
};

export default ProjectDetail;
