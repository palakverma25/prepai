"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [overallRating, setOverallRating] = useState(null); // Store computed rating
  const router = useRouter();

  useEffect(() => {
    const GetFeedback = async () => {
      try {
        const result = await db
          .select()
          .from(UserAnswer)
          .where(eq(UserAnswer.mockIdRef, params.interviewId))
          .orderBy(UserAnswer.id);

        setFeedbackList(result || []);

        // Calculate Overall Rating
        if (result.length > 0) {
          const totalRating = result.reduce((sum, item) => sum + Number(item.rating), 0);
          const averageRating = totalRating / result.length;
          setOverallRating(averageRating.toFixed(1)); // Round to 1 decimal place
        } else {
          setOverallRating(null);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    if (params?.interviewId) GetFeedback();
  }, [params?.interviewId]);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500">Congratulations!!</h2>
      <h2 className="font-bold text-2xl">
        Here is your AI-powered interview feedback!
      </h2>

      {feedbackList.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          No Interview Feedback Record Found!!
        </h2>
      ) : (
        <>
          {overallRating !== null && (
            <h2 className="text-primary text-lg my-3">
              Your overall interview rating: <strong>{overallRating}/10</strong>
            </h2>
          )}

          <h2 className="text-sm text-gray-500">
            Find below interview questions with AI-powered insights, correct
            answers, and AI-powered feedback on your interview!
          </h2>

          {feedbackList.map((item, index) => (
            <Collapsible key={index} className="mt-7">
              <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 font-bold w-full">
                {item.question} <ChevronsUpDown className="h-5 w-5" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg">
                    <strong>Rating:</strong> {item.rating}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-gray-50 text-sm text-red-900">
                    <strong>Your Answer: </strong> {item.userAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                    <strong>Correct Answer: </strong> {item.correctAns}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary">
                    <strong>Feedback: </strong> {item.feedback}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}

      <Button onClick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  );
}

export default Feedback;
