import React from "react";
import { useEffect } from "react";
import { getTopics } from "../utils/api";
import { Card } from "./Card";

export default function TopicCards({ topics, setTopics }) {
  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
  }, []);

  return (
    <section>
      {Topics.map((topic) => {
        return (
          <Card key={article.article_id}>
            <div>
              <h2>{topic.slug}</h2>
              <p>{topic.description}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
}