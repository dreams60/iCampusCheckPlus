export interface AssignmentGroup {
  id: number;
  name: string; // 주차학습, 중간고사, 평소학습, 기말고사, 발표 등등..
  position: number;
  group_weight: number;
  sis_source_id: string;
  integration_data: string;
  rules: string;
  assignments: Assignment[];
}

export interface Assignment {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string | null;
  due_at: string | null;
  lock_at: string | null;
  unlock_at: string | null;
  has_overrides: boolean | null; // 제재출??
  all_dates: number | null;
  course_id: number;
  html_url: string;
  submissions_download_url: string; // 모든 제출물을 zip으로 다운받을 수 있는 경로
  assignment_group_id: number;
  due_date_required: boolean;
  allowed_extensions: string[];
  max_name_length: number;
  turnitin_enabled: boolean | null;
  vericite_enabled: boolean | null;
  turnitin_settings: string | null;
  grade_group_students_individually: boolean;
  external_tool_tag_attributes: string | null;
  peer_reviews: boolean;
  automatic_peer_reviews: boolean;
  peer_review_count: number;
  peer_reviews_assign_at: string | null;
  group_category_id: number | null;
  needs_grading_count: number;
  needs_grading_count_by_section: string; //json
  position: number; // 표시 순서
  post_to_sis: boolean | null;
  integration_id: number | null;
  integration_data: string | null;
  points_possible: number; // 최대점수
  submission_types: string[];
  has_submitted_submissions: boolean; // 적어도 한 명에 의해 제출된 과제 (팀플용??)
  grading_type: string // pass_fail, percent, letter_grade, gpa_scale, points
  grading_standard_id: number | null;
  published: boolean;
  unpublishable: boolean; // published 상태가 false로 바뀔 수 있는지 여부. 만약 학생의 제출이 있다면 false가 될 것
  only_visible_to_overrides: boolean;
  locked_for_user: boolean; // 해당 사용자에게 잠겼는지 표시
  lock_info: string | null; // 설명 (예시 이 과제는 3월 9일 11:00까지 잠겼습니다.)
  quiz_id: number | null; // submission_types가 online_quiz일때만 가능
  anonymous_submissions: boolean | null;
  discussion_topic: string | null; // 연관된 토론
  freeze_on_copy: boolean | null; // 상관x
  frozen: boolean | null; // 상관x
  frozen_attributes: string[]; // 상관x
  omit_from_final_grade: boolean | null; // 최종 성적에서 제외되는지 여부
  allowed_attempts: number; // 허용된 제출 횟수. -1이면 무한.



}
