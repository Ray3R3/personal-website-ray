import ArticleLayout from '../../components/ArticleLayout';
import article2Image from '../../assets/article-2.jpg';

const MediciModel = () => {
  return (
    <ArticleLayout
      title="The Medici Model: Venture Capital's Renaissance Precedent"
      date="February 8, 2024"
      excerpt="How 15th-century Florentine patronage patterns predict modern venture capital dynamics—and why understanding historical precedents matters for modern allocators."
      heroImage={article2Image}
      heroAlt="Renaissance Florence architecture"
    >
      <p>
        The Medici family's approach to patronage in Renaissance Florence wasn't philanthropy—it was a systematic investment strategy that created network effects across domains. They understood something that modern venture capital has largely forgotten: breakthrough innovation happens at the intersection of disciplines, not within them.
      </p>

      <p>
        Cosimo de' Medici didn't just fund artists. He created a salon culture where mathematicians talked to architects, philosophers debated with engineers, and artists collaborated with inventors. The result wasn't just great art—it was technological revolution. Brunelleschi's dome, Leonardo's machines, Galileo's observations. Innovation at the intersection.
      </p>

      <div className="article-image aspect-video">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
          alt="Collaborative workspace"
        />
      </div>

      <h2>Portfolio Theory vs. Network Theory</h2>

      <p>
        Modern venture capital operates with portfolio theory derived from financial markets, but the Medici model suggests a different approach: creating dense networks of exceptional individuals and letting serendipity work at scale. Instead of betting on individual companies, bet on clusters of capability that reinforce each other.
      </p>

      <p>
        This is why geographic density matters in venture capital. It's not just about knowledge spillovers—it's about creating conditions for systematic serendipity. When Andreessen Horowitz talks about building community, they're unconsciously recreating Medici salon dynamics at scale.
      </p>

      <h2>Active Curation, Not Passive Funding</h2>

      <p>
        But here's what most people miss: the Medici weren't passive funders. They were active curators of talent and ideas. They created artificial scarcity around access to their networks, which increased the value of membership. They understood that exclusivity isn't elitism—it's network engineering.
      </p>

      <blockquote>
        The best firms aren't just capital allocators—they're network architects. They create systematic opportunities for their portfolio companies to collaborate, compete, and cross-pollinate.
      </blockquote>

      <div className="article-image aspect-video">
        <img 
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
          alt="Renaissance architecture"
        />
      </div>

      <h2>Concentrated Networks vs. Diversified Portfolios</h2>

      <p>
        This suggests a different model for institutional capital deployment: instead of diversifying across uncorrelated assets, concentrate on creating dense networks of correlated capabilities. Fund not just companies, but entire technological ecosystems. Build not just portfolio companies, but innovation communities.
      </p>

      <p>
        The Renaissance teaches us that the most transformative periods in history emerge from sustained investment in interconnected talent networks. The question for modern capital allocators isn't just which companies to fund—it's which communities to cultivate.
      </p>
    </ArticleLayout>
  );
};

export default MediciModel;