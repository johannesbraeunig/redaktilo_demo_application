import React from "react";
import PropTypes from "prop-types";
import { Editor } from "redaktilo-core";
import { Toolbar } from "redaktilo-toolbar";

import { Plugin as ParagraphPlugin } from "redaktilo-plugin-paragraph";
import { Plugin as BoldPlugin } from "redaktilo-plugin-bold";
import { Plugin as ItalicPlugin } from "redaktilo-plugin-italic";
import { Plugin as TitlePlugin } from "redaktilo-plugin-title";
import { H2, H3, H4, Plugin as HeadingPlugin } from "redaktilo-plugin-heading";

import { viewerData as initialValue } from "../../viewerData";

import styles from "../../App.css";
import { buttons } from "../../toolbarConfig";

const EDITOR_PLUGINS = [
  TitlePlugin({ className: styles.title }),
  ParagraphPlugin({ className: styles.paragraph }),
  BoldPlugin(),
  ItalicPlugin(),
  HeadingPlugin({ level: H2, className: styles.heading2 }),
  HeadingPlugin({ level: H3, className: styles.heading3 }),
  HeadingPlugin({ level: H4, className: styles.heading4 })
];

const renderEditor = (props, editor, next) => {
  const children = next();
  return (
    <>
      <Toolbar editor={editor} buttons={buttons} />
      {children}
    </>
  );
};

const RedaktiloDemoEditor = ({ className }) => {
  const editorRef = React.createRef();

  return (
    <Editor
      ref={editorRef}
      plugins={EDITOR_PLUGINS}
      initialValue={initialValue}
      className={className}
      renderEditor={renderEditor}
    />
  );
};

RedaktiloDemoEditor.propTypes = {
  className: PropTypes.string
};

export { RedaktiloDemoEditor };
