import React, { useState } from 'react';
import { EDUCATIONAL_QUIZ, QuizQuestion } from '../data/heritageData';
import { 
  GraduationCap, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface QuizViewProps {
  onSelectSite: (siteId: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onSelectSite }) => {
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (submitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    EDUCATIONAL_QUIZ.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = EDUCATIONAL_QUIZ.length;
  const score = calculateScore();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
          HOẠT ĐỘNG GIÁO DỤC ĐỊA PHƯƠNG
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#123B56]">
          Góc Trắc Nghiệm Di Sản Hải Phòng
        </h1>
        <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
          Kiểm tra và củng cố kiến thức liên môn Lịch sử - Địa lý thông qua 6 câu hỏi trắc nghiệm tương tác về các di sản tiêu biểu vừa khám phá.
        </p>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span>Tiến độ hoàn thành:</span>
            <span className="font-bold text-[#123B56]">{answeredCount} / {totalQuestions} câu</span>
          </div>
          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#123B56] transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Questions */}
      <div className="space-y-6">
        {EDUCATIONAL_QUIZ.map((q, idx) => {
          const selected = userAnswers[q.id];
          const isCorrect = selected === q.correctIndex;

          return (
            <div 
              key={q.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 border transition-all ${
                submitted 
                  ? isCorrect 
                    ? 'border-emerald-300 bg-emerald-50/20 shadow-xs' 
                    : 'border-red-300 bg-red-50/20 shadow-xs'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#123B56] text-[#D5A85C] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    Phân môn: {q.subjectTag}
                  </span>
                </div>
                <button
                  onClick={() => onSelectSite(q.siteId)}
                  className="text-xs font-mono font-bold text-[#123B56] hover:underline"
                >
                  Xem hồ sơ [{q.siteId}]
                </button>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-gray-800 leading-snug mb-4">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((option, optIdx) => {
                  const isOptionSelected = selected === optIdx;
                  let optionStyle = 'border-gray-200 bg-gray-50/60 hover:bg-gray-100 text-gray-700';

                  if (isOptionSelected) {
                    optionStyle = 'border-[#123B56] bg-[#DDECF2] text-[#123B56] font-semibold';
                  }

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      optionStyle = 'border-emerald-500 bg-emerald-100 text-emerald-950 font-bold';
                    } else if (isOptionSelected && !isCorrect) {
                      optionStyle = 'border-red-400 bg-red-100 text-red-900 line-through';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={submitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between transition-all ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {submitted && isOptionSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-[#123B56]">
                    <HelpCircle className="w-3.5 h-3.5 text-[#D5A85C]" />
                    Giải thích khoa học:
                  </div>
                  <p className="leading-relaxed pl-5">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submit / Results Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {!submitted ? (
          <>
            <div>
              <div className="text-sm font-bold text-gray-800">
                Bạn đã trả lời {answeredCount} / {totalQuestions} câu hỏi.
              </div>
              <div className="text-xs text-gray-500">
                Hãy hoàn thành tất cả câu hỏi để xem kết quả và giải thích chi tiết.
              </div>
            </div>
            <button
              disabled={answeredCount < totalQuestions}
              onClick={() => setSubmitted(true)}
              className={`text-xs sm:text-sm font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all ${
                answeredCount === totalQuestions
                  ? 'bg-[#123B56] hover:bg-[#0c283b] text-white shadow-md'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Award className="w-4 h-4 text-[#D5A85C]" />
              <span>Chấm Điểm & Xem Lời Giải</span>
            </button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D5A85C] text-[#123B56] flex flex-col items-center justify-center font-black">
                <span className="text-xl leading-none">{score}</span>
                <span className="text-[10px] uppercase font-bold">/{totalQuestions}</span>
              </div>
              <div>
                <div className="text-base font-extrabold text-[#123B56]">
                  {score === totalQuestions 
                    ? 'Xuất sắc! Bạn nắm rất vững kiến thức di sản Hải Phòng!' 
                    : score >= 4 
                      ? 'Rất tốt! Bạn hiểu biết khá sâu về văn hóa đất Cảng.' 
                      : 'Hãy đọc thêm các hồ sơ di sản để nâng cao điểm số nhé!'}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Đạt {Math.round((score / totalQuestions) * 100)}% tổng số điểm bài kiểm tra.
                </div>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="bg-gray-100 hover:bg-gray-200 text-[#123B56] text-xs font-bold py-3 px-5 rounded-xl flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm Lại Bài Thi</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
