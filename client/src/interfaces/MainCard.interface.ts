import {
  AnimationControls,
  Target,
  TargetAndTransition,
  VariantLabels,
} from "framer-motion";
import { ReactNode } from "react";

export interface MainCardProps {
  children: ReactNode;
  rules: RulesForAnim;
  active: boolean;
}
export interface RulesForAnim {
  initial: boolean | Target | VariantLabels;
  animate: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  exit: TargetAndTransition | VariantLabels;
}
export interface AnimatedCardProps extends MainCardProps {
  active: boolean;
  rules: RulesForAnim;
}
