import React from "react";
import PropTypes from "prop-types";
import { Viewer } from "redaktilo-core";

import { renderer as paragraphRenderer } from "redaktilo-plugin-paragraph";
import { renderer as boldRenderer } from "redaktilo-plugin-bold";
import { renderer as italicRenderer } from "redaktilo-plugin-italic";
import { renderer as titleRenderer } from "redaktilo-plugin-title";
import { renderer as headingRenderer } from "redaktilo-plugin-heading";

import { viewerData } from "../../viewerData";

// import styles from "../../App.css";

const paragraph = props =>
  paragraphRenderer({ ...props, className: styles.paragraph });
const title = props => titleRenderer({ ...props, className: styles.title });

const heading = props => {
  const {
    node: { data: { level } = {} }
  } = props;

  return headingRenderer({ ...props, className: styles[`heading${level}`] });
};

const VIEWER_RENDERERS = [
  title,
  paragraph,
  heading,
  italicRenderer,
  boldRenderer
];

const RedaktiloDemoViewer = ({ className }) => (
  <Viewer
    document={viewerData.document}
    renderers={VIEWER_RENDERERS}
    className={className}
  />
);

RedaktiloDemoViewer.propTypes = {
  className: PropTypes.string
};

export { RedaktiloDemoViewer };
