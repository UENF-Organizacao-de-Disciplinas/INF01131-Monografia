import code_1_set_working_directory     as swd
import code_2_get_pdf_list              as gpl
import code_3_get_string_from_pdf       as gsp
import code_4_structure_data_from_text  as sdt
import code_5_filter_structured_data    as fsd
import code_6_get_demand_list           as gdl
import code_7_merge_demands             as mgd
import code_8_output_demand_as_txt      as odt

swd.set_cwd()
pdf_paths          = gpl.get_pdf_list()
texts              = gsp.get_pdf_text(pdf_paths)
structured_data    = sdt.structure_data(texts)
approved_codes     = fsd.get_approved_codes(structured_data)
demands            = gdl.get_demand_list(approved_codes)
demands_and_values = mgd.get_merged_demands(demands)
odt.output_to_txt(demands_and_values)