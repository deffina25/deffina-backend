import type { Schema, Struct } from '@strapi/strapi';

export interface BlogPageBlogPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_pages';
  info: {
    displayName: 'blog-page-item';
  };
  attributes: {
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageBlogPageBox1 extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_page_box_1s';
  info: {
    displayName: 'blog-page-box-1';
    icon: 'alien';
  };
  attributes: {
    blog_item: Schema.Attribute.Component<
      'blog-page.blog-page-box-1-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface BlogPageBlogPageBox1Item extends Struct.ComponentSchema {
  collectionName: 'components_blog_page_blog_page_box_1_items';
  info: {
    displayName: 'blog-page-box-1-item';
    icon: 'alien';
  };
  attributes: {
    alt: Schema.Attribute.String;
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    top_text: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_banners';
  info: {
    displayName: 'cases-page-banner';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

export interface CasesPageCasesPageBox1 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_1s';
  info: {
    displayName: 'cases-page-box-1';
  };
  attributes: {
    box_1_item: Schema.Attribute.Component<
      'cases-page.cases-page-box-1-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox1Item extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_1_items';
  info: {
    displayName: 'cases-page-box-1-item';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox2 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_2s';
  info: {
    displayName: 'cases-page-box-2';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageBox3 extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_box_3s';
  info: {
    displayName: 'cases-page-box-3';
  };
  attributes: {
    client_say: Schema.Attribute.Component<
      'module-client-say.client-say',
      false
    >;
  };
}

export interface CasesPageCasesPageImage extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_images';
  info: {
    displayName: 'cases-page-image';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    border_color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CasesPageCasesPageItem extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_items';
  info: {
    displayName: 'cases-item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface CasesPageCasesPageText extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_texts';
  info: {
    displayName: 'cases-page-text';
  };
  attributes: {
    h2: Schema.Attribute.String;
    h3: Schema.Attribute.String;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

export interface CasesPageCasesPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_cases_page_cases_page_titles';
  info: {
    displayName: 'cases-page-title';
  };
  attributes: {
    path: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ModuleClientSayClientSay extends Struct.ComponentSchema {
  collectionName: 'components_module_client_say_client_says';
  info: {
    displayName: 'client-say';
  };
  attributes: {
    addition: Schema.Attribute.String;
    color_addition: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String;
  };
}

export interface RunningLineRunningLine extends Struct.ComponentSchema {
  collectionName: 'components_running_line_running_lines';
  info: {
    displayName: 'Running-line';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-page.blog-page': BlogPageBlogPage;
      'blog-page.blog-page-box-1': BlogPageBlogPageBox1;
      'blog-page.blog-page-box-1-item': BlogPageBlogPageBox1Item;
      'cases-page.cases-page-banner': CasesPageCasesPageBanner;
      'cases-page.cases-page-box-1': CasesPageCasesPageBox1;
      'cases-page.cases-page-box-1-item': CasesPageCasesPageBox1Item;
      'cases-page.cases-page-box-2': CasesPageCasesPageBox2;
      'cases-page.cases-page-box-3': CasesPageCasesPageBox3;
      'cases-page.cases-page-image': CasesPageCasesPageImage;
      'cases-page.cases-page-item': CasesPageCasesPageItem;
      'cases-page.cases-page-text': CasesPageCasesPageText;
      'cases-page.cases-page-title': CasesPageCasesPageTitle;
      'module-client-say.client-say': ModuleClientSayClientSay;
      'running-line.running-line': RunningLineRunningLine;
    }
  }
}
