import { HeadingMedium, ParagraphSmall } from '@bereghici/design-system.core';
import { SecondaryLayout } from 'components/layout';
import { FullArticleContainer } from 'components/article';

export default function Home() {
  return (
    <SecondaryLayout
      path="/"
      title="Alexandru Bereghici"
      description="Friendly tutorials for developers. Focus on React, CSS, and more!"
    >
      <FullArticleContainer>
        <HeadingMedium as="h1" display="flex" justifyContent="center">
          Demystifying styled-components
        </HeadingMedium>
        <ParagraphSmall>
          When I first started using styled-components, it seemed like magic .
        </ParagraphSmall>
        <ParagraphSmall>
          Somehow, using an obscure half-string-half-function syntax, the tool
          was able to take some arbitrary CSS and assign it to a React
          component, bypassing the CSS selectors we've always used. Like so many
          devs, I learned how to use styled-components, but without really
          understanding what was going on under the hood. Knowing how it works
          is helpful. You don't need to understand how cars work in order to
          drive, but it sure as heck helps when your car breaks down on the side
          of the road.* Debugging CSS is hard enough on its own without adding
          in a layer of tooling magic! By demystifying styled-components, we'll
          be able to diagnose and fix weird CSS issues with way less
          frustration. In this blog post, we'll pop the hood and learn how it
          works by building our own mini-clone of styled-components.
        </ParagraphSmall>
      </FullArticleContainer>
    </SecondaryLayout>
  );
}
