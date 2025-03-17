export interface Module {
  module_id: string;
  title: string;
  position: number; // 표시될 순서 (1부터 시작)
  published: boolean | null;
  unlock_at: string | null;
  week_position: number; // 주차 (1~16)
}

export interface ModuleItem {
  completed: boolean;
  completion_determinable: boolean;
  content_data: ContentData; // Json
  content_id: number;
  content_type: string; // attendance_item (출첵확인), assignment (과제), discussion(토의)
  indent: number; // ?
  is_child_content: boolean; // ?
  module_item_id: number;
  position: number; // 순서
  published: boolean | null;
  title: string;
  url: string;
}

export interface ContentData {
  course_id: number;
  created_at: string;
  description: string;
  due_at: string | null;
  item_content_data: ItemContentData | null; //json
  item_content_id: string;
  item_content_type: string; // 이게 movie 등을 지정하지 않음.
  item_id: number;
  late_at: string | null;
  lecture_period_status: string;
  lesson_position: number;
  lock_at: string | null;
  omit_progress: boolean;
  opened: boolean;
  original_item_id: number;
  published: boolean;
  title: string;
  unlock_at: string | null;
  updated_at: string | null;
  use_attendance: boolean; // 출첵 여부
  use_week_and_lesson: boolean;
  week_position: number | null;
  points_possible: number | null; // 과제류에서 최대 점수 적음.
  discussion_comment_count: number; // 토의에서 전체 코멘트 개수
  discussion_comment_unread_count: number; // 토의에서 아직 안읽은 코멘트 개수
}

// 여기서 자료의 종류가 결정남.
export interface ItemContentData {
  content_id: string;
  content_type: string; // 이게 동영상(movie), 강의녹화(screenlecture), 파일(file), 시험(), 지정 => 토의 및 과제 제출은 ItemContentData가 null
  created_at: string;
  duration: number; // 길이(초단위)
  progress_support: boolean;
  thumbnail_url: string;
  updated_at: string | null;
  view_url: string;
  _id: string; //??
}
// 5가지 전부 조합하고, 중복 제거해야함.
//https://canvas.skku.edu/api/v1/courses/60107/assignment_groups?include=assignments
// https://canvas.skku.edu/learningx/api/v1/courses/60107/modules?include_detail=true
// https://canvas.skku.edu/api/v1/courses/60107/quizzes/assignment_overrides?per_page=20
// https://canvas.skku.edu/api/v1/courses/60107/new_quizzes/assignment_overrides?per_page=20
// https://canvas.skku.edu/api/v1/courses/60107/discussion_topics?exclude_assignment_descriptions=true&exclude_context_module_locked_topics=true&include%5B%5D=sections_user_count&include%5B%5D=sections&include_assignment=true&page=1&per_page=50&plain_messages=true
