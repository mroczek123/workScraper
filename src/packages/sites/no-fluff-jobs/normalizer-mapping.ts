import { Currency } from "@src/packages/currencies/models";
import { EmploymentType, Seniority } from "@src/packages/offers/models";
import { CurrencyChoices, SeniorityChoices, TypeChoices } from "./data-definitions/enums";

export const currencyToNormalizedCurrencyMap = {
  [CurrencyChoices.PLN]: Currency.PLN,
  [CurrencyChoices.USD]: Currency.USD,
  [CurrencyChoices.EUR]: Currency.EUR,
  [CurrencyChoices.HUF]: Currency.HUF,
  [CurrencyChoices.CZK]: Currency.CZK,
}

export const contractTypeToNormalizedEmploymentTypeMap = {
  [TypeChoices.B2B]: EmploymentType.B2B,
  [TypeChoices.PERMANENT]: EmploymentType.PERMANENT,
  [TypeChoices.ZLECENIE]: EmploymentType.MANDATE_CONTRACT,
  [TypeChoices.UOD]: EmploymentType.UOD
}

export const seniorityToNormalizedSeniorityMap = {
  [SeniorityChoices.TRAINEE]: Seniority.TRAINEE,
  [SeniorityChoices.JUNIOR]: Seniority.JUNIOR,
  [SeniorityChoices.MID]: Seniority.MID,
  [SeniorityChoices.SENIOR]: Seniority.SENIOR,
  [SeniorityChoices.EXPERT]: Seniority.EXPERT,
}
